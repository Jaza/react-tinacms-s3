/**

Copyright 2021 Forestry.io Holdings, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
import { MediaStore, MediaUploadOptions, Media, MediaList, MediaListOptions } from '@tinacms/core';
export declare class S3MediaStore implements MediaStore {
    s3Bucket: string;
    s3ReadUrl: string;
    s3ServerSideEncryption: string;
    accept: string;
    constructor({ s3Bucket, s3ReadUrl, s3ServerSideEncryption, }: S3MediaStoreOptions);
    persist(files: MediaUploadOptions[]): Promise<Media[]>;
    previewSrc(filename: string): Promise<string>;
    list(options?: MediaListOptions): Promise<MediaList>;
    delete(media: Media): Promise<void>;
}
export interface S3MediaStoreOptions {
    s3Bucket: string;
    s3ReadUrl?: string;
    s3ServerSideEncryption?: string;
}
