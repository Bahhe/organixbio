import { type AppType } from "next/app";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID as string;

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
            fbq('init', ${FB_PIXEL_ID});
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
