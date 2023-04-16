import { type AppType } from "next/app";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
import Script from "next/script";
// import { fbq } from "react-facebook-pixel";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  // const router = useRouter();

  // useEffect(() => {
  //   // eslint-disable-next-line
  //   import("react-facebook-pixel")
  //     .then((x) => x.default)
  //     .then((ReactPixel) => {
  //       ReactPixel.init("771903037595646"); // facebookPixelId
  //       ReactPixel.pageView();
  //
  //       router.events.on("routeChangeComplete", () => {
  //         ReactPixel.pageView();
  //       });
  //     });
  // }, [router.events]);

  return (
    <main className={`${poppins.variable} overflow-hidden font-sans`}>
      <ClerkProvider {...pageProps}>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '771903037595646');
            fbq('track', 'PageView');
          `,
          }}
        />
        <Component {...pageProps} />
      </ClerkProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
