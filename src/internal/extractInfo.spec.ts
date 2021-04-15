import {components} from '@octokit/openapi-types/generated/types'
import {extractInfo} from './extractInfo'

describe('extractInfo', () => {

    const repository: components["schemas"]["full-repository"] = {
        "id": 358352694,
        "node_id": "MDEwOlJlcG9zaXRvcnkzNTgzNTI2OTQ=",
        "name": "retrieve-repository-info",
        "full_name": "remal-github-actions/retrieve-repository-info",
        "private": false,
        "owner": {
            "login": "remal-github-actions",
            "id": 77626445,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjc3NjI2NDQ1",
            "avatar_url": "https://avatars.githubusercontent.com/u/77626445?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/remal-github-actions",
            "html_url": "https://github.com/remal-github-actions",
            "followers_url": "https://api.github.com/users/remal-github-actions/followers",
            "following_url": "https://api.github.com/users/remal-github-actions/following{/other_user}",
            "gists_url": "https://api.github.com/users/remal-github-actions/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/remal-github-actions/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/remal-github-actions/subscriptions",
            "organizations_url": "https://api.github.com/users/remal-github-actions/orgs",
            "repos_url": "https://api.github.com/users/remal-github-actions/repos",
            "events_url": "https://api.github.com/users/remal-github-actions/events{/privacy}",
            "received_events_url": "https://api.github.com/users/remal-github-actions/received_events",
            "type": "Organization",
            "site_admin": false
        },
        "html_url": "https://github.com/remal-github-actions/retrieve-repository-info",
        "description": "Retrieve GitHub repository info",
        "fork": false,
        "url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info",
        "forks_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/forks",
        "keys_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/teams",
        "hooks_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/hooks",
        "issue_events_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/issues/events{/number}",
        "events_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/events",
        "assignees_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/assignees{/user}",
        "branches_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/branches{/branch}",
        "tags_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/tags",
        "blobs_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/languages",
        "stargazers_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/stargazers",
        "contributors_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/contributors",
        "subscribers_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/subscribers",
        "subscription_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/subscription",
        "commits_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/contents/{+path}",
        "compare_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/merges",
        "archive_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/downloads",
        "issues_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/issues{/number}",
        "pulls_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/labels{/name}",
        "releases_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/releases{/id}",
        "deployments_url": "https://api.github.com/repos/remal-github-actions/retrieve-repository-info/deployments",
        "created_at": "2021-04-15T18:15:27Z",
        "updated_at": "2021-04-15T18:17:04Z",
        "pushed_at": "2021-04-15T18:16:20Z",
        "git_url": "git://github.com/remal-github-actions/retrieve-repository-info.git",
        "ssh_url": "git@github.com:remal-github-actions/retrieve-repository-info.git",
        "clone_url": "https://github.com/remal-github-actions/retrieve-repository-info.git",
        "svn_url": "https://github.com/remal-github-actions/retrieve-repository-info",
        "homepage": "",
        "size": 0,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "TypeScript",
        "has_issues": true,
        "has_projects": false,
        "has_downloads": true,
        "has_wiki": false,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": {
            "key": "mit",
            "name": "MIT License",
            "spdx_id": "MIT",
            "url": "https://api.github.com/licenses/mit",
            "node_id": "MDc6TGljZW5zZTEz"
        },
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main",
        "temp_clone_token": null,
        "organization": {
            "login": "remal-github-actions",
            "id": 77626445,
            "node_id": "MDEyOk9yZ2FuaXphdGlvbjc3NjI2NDQ1",
            "avatar_url": "https://avatars.githubusercontent.com/u/77626445?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/remal-github-actions",
            "html_url": "https://github.com/remal-github-actions",
            "followers_url": "https://api.github.com/users/remal-github-actions/followers",
            "following_url": "https://api.github.com/users/remal-github-actions/following{/other_user}",
            "gists_url": "https://api.github.com/users/remal-github-actions/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/remal-github-actions/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/remal-github-actions/subscriptions",
            "organizations_url": "https://api.github.com/users/remal-github-actions/orgs",
            "repos_url": "https://api.github.com/users/remal-github-actions/repos",
            "events_url": "https://api.github.com/users/remal-github-actions/events{/privacy}",
            "received_events_url": "https://api.github.com/users/remal-github-actions/received_events",
            "type": "Organization",
            "site_admin": false
        },
        "network_count": 0,
        "subscribers_count": 0
    }

    it('simple scenario', () => {
        expect(extractInfo(repository).id).toBe(358352694)
    })

    it('snake case is transformed to camel case', () => {
        expect(extractInfo(repository).nodeId).toBe('MDEwOlJlcG9zaXRvcnkzNTgzNTI2OTQ=')
    })

    it('URLs are included', () => {
        expect(extractInfo(repository).htmlUrl).toBe('https://github.com/remal-github-actions/retrieve-repository-info')
    })

    it("boolean flags are added to 'type' string values", () => {
        expect(extractInfo(repository).owner?.isUser).toBeUndefined()
        expect(extractInfo(repository).owner?.isOrganization).toBeTruthy()

        expect(extractInfo(repository).organization?.isUser).toBeUndefined()
        expect(extractInfo(repository).organization?.isOrganization).toBeTruthy()
    })

})
