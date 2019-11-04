export interface Auth {
    name?: string;
    profilePicture?: string;
}

export interface User extends Auth {
    id: string;
    grade: Grade;
}

export enum Grade {
    NONE,
    ADMIN
}
