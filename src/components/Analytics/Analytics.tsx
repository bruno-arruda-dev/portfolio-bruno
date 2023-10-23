const Analytics = () => {

    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING}`}></script>

            <script dangerouslySetInnerHTML={{

                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', 'G-RLHNCXVCGW');
                `
            }}

            />
        </>
    );
};

export default Analytics;