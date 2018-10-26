/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
    return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
}

class Help extends React.Component {
    render() {
        const language = this.props.language || "";
        const helpLinks = [
            {
                content: `[We host all of our source code on GitHub!](https://github.com/ense-400-capstone-appstore)`,
                title: "Check Out the Source Code"
            },
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
                            <h1>What is this?</h1>
                        </header>
                        <p>
                            This site hosts documentation for a Software Systems
                            Engineering capstone projects by
                            <a href="https://github.com/shevtsod">@shevtsod</a>
                            ,&nbsp;
                            <a href="https://github.com/oscar666666">
                                @oscar666666
                            </a>
                            ,&nbsp;and&nbsp;
                            <a href="https://github.com/Uyser">@Uyser</a>
                            &nbsp;from the University of Regina.
                        </p>
                        <GridBlock
                            align="center"
                            layout="threeColumn"
                            contents={helpLinks}
                        />
                    </div>
                </Container>
            </div>
        );
    }
}

module.exports = Help;
