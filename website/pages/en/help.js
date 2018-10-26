/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
    return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
}

class Help extends React.Component {
    render() {
        const language = this.props.language || "";
        const supportLinks = [
            {
                content: `Learn more using the [documentation on this site.](${docUrl(
                    "doc1.html",
                    language
                )})`,
                title: "Browse Docs"
            }
        ];

        return (
            <div className="docMainWrapper wrapper">
                <Container className="mainContainer documentContainer postContainer">
                    <div className="post">
                        <header className="postHeader">
                            <h1>Need help?</h1>
                        </header>
                        <p>
                            This project is maintained by a dedicated group of
                            people.
                        </p>
                        <div style={{ textAlign: "center" }}>
                            <h2>Browse Docs</h2>
                            <p>
                                Learn more using the{" "}
                                <a href={docUrl("doc1.html")}>
                                    Documentation on this site.
                                </a>
                            </p>
                        </div>
                        <div contents={supportLinks} layout="oneColumn" />
                    </div>
                </Container>
            </div>
        );
    }
}

module.exports = Help;
