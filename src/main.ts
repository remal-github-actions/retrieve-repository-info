import * as core from '@actions/core'
import {extractInfo} from './internal/extractInfo'
import {newOctokitInstance} from './internal/octokit'

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

async function run(): Promise<void> {
    try {
        const repositoryFullName = core.getInput('repository', {required: true})
        const githubToken = core.getInput('githubToken', {required: true})
        core.setSecret(githubToken)

        const repositoryFillNameRegex = /^([^/]+)\/([^/]+)$/
        const repositoryFillNameMatch = repositoryFullName.match(repositoryFillNameRegex)
        if (repositoryFillNameMatch == null) {
            throw new Error(`Repository full name '${repositoryFullName}' doesn't match to ${repositoryFillNameRegex}`)
        }
        const repositoryOwner = repositoryFillNameMatch[1]
        const repositoryName = repositoryFillNameMatch[2]

        const octokit = newOctokitInstance(githubToken)
        const repository = await octokit.repos.get({
            owner: repositoryOwner,
            repo: repositoryName,
        }).then(it => it.data)

        const repositoryInfo = extractInfo(repository)

        if (repositoryInfo['topics'] == null) {
            const allTopics = await octokit.repos.getAllTopics({
                owner: repositoryOwner,
                repo: repositoryName,
            }).then(it => it.data.names)
            repositoryInfo['topics'] = allTopics
        }

        core.setOutput('result', JSON.stringify(repositoryInfo))

    } catch (error) {
        core.setFailed(error)
    }
}

//noinspection JSIgnoredPromiseFromCall
run()
