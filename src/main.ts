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

        const user = await octokit.users.getByUsername({
            username: repositoryInfo['owner']['login']
        }).then(it => it.data)
        const userInfo = extractInfo(user)
        repositoryInfo['owner'] = userInfo

        if (repositoryInfo['organization'] != null && repositoryInfo['organization']['login'] != null) {
            const organization = await octokit.orgs.get({
                org: repositoryInfo['organization']['login']
            }).then(it => it.data)
            const organizationInfo = extractInfo(organization)
            repositoryInfo['organization'] = organizationInfo
        }

        const allTopics = await octokit.repos.getAllTopics({
            owner: repositoryOwner,
            repo: repositoryName,
        }).then(it => it.data.names)
        repositoryInfo['topics'] = allTopics
        repositoryInfo['topicsString'] = repositoryInfo['topics'].join(',')

        if (repositoryInfo['license'] != null && repositoryInfo['license']['key'] != null) {
            const license = await octokit.licenses.get({
                license: repositoryInfo['license']['key']
            }).then(it => it.data)
            const licenseInfo = extractInfo(license)
            repositoryInfo['license'] = licenseInfo
        }

        const languages = await octokit.repos.listLanguages({
            owner: repositoryOwner,
            repo: repositoryName,
        }).then(it => it.data)
        repositoryInfo['languages'] = languages
        repositoryInfo['languagesString'] = Object.keys(repositoryInfo['languages']).join(',')

        core.setOutput('result', JSON.stringify(repositoryInfo))

    } catch (error) {
        core.setFailed(error)
    }
}

//noinspection JSIgnoredPromiseFromCall
run()
