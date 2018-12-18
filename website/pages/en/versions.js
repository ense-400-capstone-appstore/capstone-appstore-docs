/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary");

const Container = CompLibrary.Container;

const CWD = process.cwd();

const siteConfig = require(`${CWD}/siteConfig.js`);
const versions = require(`${CWD}/versions.json`);

function Versions(props) {
    const latestVersion = versions[0];
    const repoUrl = `https://github.com/${siteConfig.organizationName}/${
        siteConfig.projectName
    }`;
    return (
        <div className="docMainWrapper wrapper">
            <Container className="mainContainer versionsContainer">
                <div className="post">
                    <header className="postHeader">
                        <h1>{siteConfig.title} Versions</h1>
                    </header>
                    <p>
                        New versions of this documentation are released every so
                        often.
                    </p>
                    <h3 id="latest">Current version (Stable)</h3>
                    <table className="versions">
                        <tbody>
                            <tr>
                                <th>{latestVersion}</th>
                                <td>
                                    <a
                                        href={`${siteConfig.baseUrl}${
                                            siteConfig.docsUrl
                                        }/${
                                            props.language
                                        }/general/getting-started`}
                                    >
                                        Documentation
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href={`${repoUrl}/releases/tag/${latestVersion}`}
                                    >
                                        Release Notes
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>This is the latest stable version of the docs.</p>
                    <h3 id="rc">Pre-release versions</h3>
                    <table className="versions">
                        <tbody>
                            <tr>
                                <th>master</th>
                                <td>
                                    <a
                                        href={`${siteConfig.baseUrl}${
                                            siteConfig.docsUrl
                                        }/${
                                            props.language
                                        }/next/general/getting-started`}
                                    >
                                        Documentation
                                    </a>
                                </td>
                                <td>
                                    <a href={repoUrl}>Source Code</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        This is the most recent and potentially unstable version
                        of the docs.
                    </p>
                    <h3 id="archive">Past versions</h3>
                    <table className="versions">
                        <tbody>
                            {versions.map(
                                version =>
                                    version !== latestVersion && (
                                        <tr>
                                            <th>{version}</th>
                                            <td>
                                                <a href="">Documentation</a>
                                            </td>
                                            <td>
                                                <a href="">Release Notes</a>
                                            </td>
                                        </tr>
                                    )
                            )}
                        </tbody>
                    </table>
                    <p>
                        This is an archive of older versions of the docs. You
                        can find past versions of this project on{" "}
                        <a href={repoUrl}>GitHub</a>.
                    </p>
                </div>
            </Container>
        </div>
    );
}

module.exports = Versions;
