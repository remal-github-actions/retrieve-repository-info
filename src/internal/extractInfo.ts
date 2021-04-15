import {components} from '@octokit/openapi-types/generated/types'
import {snakeCaseToCamelCase} from './snakeCaseToCamelCase'

type Repository = components["schemas"]["full-repository"]
type RepositoryInfo = Record<string, any>

export function extractInfo(repository: Repository): RepositoryInfo {
    const repositoryInfo = extractObjectInfo(repository)
    return repositoryInfo
}

function extractObjectInfo(data: Record<string, any>): Record<string, any> {
    const info: Record<string, any> = {}
    Object.entries(data).forEach(([key, value]) => {
        if (value == null) {
            return
        }

        const mappedKey = snakeCaseToCamelCase(key)
        const mappedValue = extractAnyInfo(value)
        info[mappedKey] = mappedValue

        if (mappedKey === 'type' && typeof mappedValue === 'string') {
            const boolKey = `is${mappedValue.substr(0, 1).toUpperCase()}${mappedValue.substr(1)}`
            if (info[boolKey] == null) {
                info[boolKey] = true
            }
        }
    })
    return info
}

function extractAnyInfo(data: any): any {
    if (Array.isArray(data)) {
        return data
            .filter(item => item != null)
            .map(extractAnyInfo)

    } else if (typeof data === 'object') {
        return extractObjectInfo(data)

    } else {
        return data
    }
}
