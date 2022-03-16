import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="custom" content="123123" />
                    <title>똔개</title>
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        );
    }
}
