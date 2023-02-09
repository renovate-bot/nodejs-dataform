// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(name) {
  // [START dataform_v1beta1_generated_Dataform_ResetWorkspaceChanges_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The workspace's name.
   */
  // const name = 'abc123'
  /**
   *  Optional. Full file paths to reset back to their committed state including filename,
   *  rooted at workspace root. If left empty, all files will be reset.
   */
  // const paths = 'abc123'
  /**
   *  Optional. If set to true, untracked files will be deleted.
   */
  // const clean = true

  // Imports the Dataform library
  const {DataformClient} = require('@google-cloud/dataform').v1beta1;

  // Instantiates a client
  const dataformClient = new DataformClient();

  async function callResetWorkspaceChanges() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await dataformClient.resetWorkspaceChanges(request);
    console.log(response);
  }

  callResetWorkspaceChanges();
  // [END dataform_v1beta1_generated_Dataform_ResetWorkspaceChanges_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
