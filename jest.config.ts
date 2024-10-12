import type {Config} from 'jest';
export default async (): Promise<Config> => {
    return {
        preset: 'ts-jest',
        testEnvironment: 'node',
        transform: {
            '^.+\\.tsx?$': 'ts-jest',  // Для работы с TypeScript
        },
        moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
        transformIgnorePatterns: ['/node_modules/'],  // Игнорировать модули node
    };
};
