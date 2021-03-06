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
export declare const S3_ACCESS_KEY_ID = "tina_s3_access_key_id";
export declare const S3_SECRET_ACCESS_KEY = "tina_s3_secret_access_key";
export declare const S3_SESSION_TOKEN = "tina_s3_session_token";
export declare class S3StsClient {
    region: string;
    s3Bucket: string;
    constructor(region: string, s3Bucket: string);
    get accessKeyId(): string;
    set accessKeyId(value: string);
    get secretAccessKey(): string;
    set secretAccessKey(value: string);
    get sessionToken(): string;
    set sessionToken(value: string);
    authenticate(accessKeyId: string, secretAccessKey: string): Promise<void>;
}
