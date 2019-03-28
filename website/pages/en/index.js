const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

const imgUrl = img => `${siteConfig.baseUrl}img/${img}`;
const docUrl = (doc, lang) =>
    `${siteConfig.baseUrl}docs/${lang ? `${lang}/` : ""}${doc}`;
const pageUrl = (page, lang) =>
    siteConfig.baseUrl + (lang ? `${lang}/` : "") + page;

const Button = props => (
    <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
            {props.children}
        </a>
    </div>
);

Button.defaultProps = {
    target: "_self"
};

const SplashContainer = props => (
    <div className="homeContainer">
        <div className="homeSplashFade">
            <div className="wrapper homeWrapper">{props.children}</div>
        </div>
    </div>
);

const ProjectTitle = () => (
    <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
    </h2>
);

const PromoSection = props => (
    <div className="section promoSection">
        <div className="promoRow">
            <div className="pluginRowBlock">{props.children}</div>
        </div>
    </div>
);

const HomeSplash = props => (
    <SplashContainer>
        <div className="inner">
            <ProjectTitle />
            <PromoSection>
                <Button href={docUrl("welcome", props.lang || "")}>
                    Read the Docs
                </Button>
                <Button href={siteConfig.orgUrl}>GitHub</Button>
            </PromoSection>
        </div>
    </SplashContainer>
);

const Block = props => (
    <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
    >
        <GridBlock
            align={props.align || "center"}
            contents={props.children}
            layout={props.layout}
        />
    </Container>
);

const Description = props => (
    <Block background="dark" align="left">
        {[
            {
                image: imgUrl("Icon.svg"),
                imageAlign: "right",
                title: "Welcome!",
                content:
                    "Welcome to the documentation site for the Matryoshka project! Please see our [Welcome](" +
                    docUrl("welcome", props.language) +
                    ") page to learn more about the project. Among other things, you will find:\n" +
                    " * An introduction to how the project is laid out and how to navigate the documentation.\n" +
                    " * In-depth information about the server, client, and even this documentation site.\n" +
                    " * The server REST API reference.\n" +
                    " * ... and maybe even more!"
            }
        ]}
    </Block>
);

const FeatureDashboard = props => (
    <Block>
        {[
            {
                image: imgUrl("home/feature1.png")
            },
            {
                title: "A home for your apps",
                content:
                    "Manage installed apps and discover new apps through our sleek interface. Vendors can also use the same dashboard to create new apps and groups to share with their users."
            }
        ]}
    </Block>
);

const FeatureAdmin = props => (
    <Block>
        {[
            {
                title: "Power for Admins",
                content:
                    "Administrators gain access to a separate dashboard made specifically for viewing the big picture. The dashboard is optimized for operations ranging from approving new apps to changing system-wide settings."
            },
            {
                image: imgUrl("home/feature2.png")
            }
        ]}
    </Block>
);

const FeatureApp = props => (
    <Block>
        {[
            {
                image: imgUrl("home/feature3.png")
            },
            {
                title: "Handheld Convenience",
                content:
                    "Any app you have access to can be downloaded and updated through our very own mobile app. After signing up, you can manage all of your apps directly from your phone."
            }
        ]}
    </Block>
);

const FeatureOpenSource = props => (
    <Block>
        {[
            {
                title: "Open Source!",
                content:
                    "We believe that open-source software makes the world better for everyone. Matryoshka is available to use both on our hardware or, if you choose, on your own hardware on-premises. Simply visit our GitHub and download the latest version of the application, deploy it to your hardware, and your own private appstore is ready to go!"
            }
        ]}
    </Block>
);

const Features = props => (
    <React.Fragment>
        <FeatureDashboard />
        <FeatureAdmin />
        <FeatureApp />
        <FeatureOpenSource />
    </React.Fragment>
);

const Index = props => {
    const language = props.language || "";

    return (
        <div>
            <HomeSplash language={language} />

            <div className="mainContainer">
                <Description language={language} />
                <Features />
            </div>
        </div>
    );
};

module.exports = Index;
