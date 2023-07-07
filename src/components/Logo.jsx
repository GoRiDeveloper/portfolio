export const Logo = ({ logoWidth }) => {

    return (

        <a className="logo">
            <img
                loading="lazy"
                className="logo__image"
                src="/assets/img/logo/logo-aside.webp"
                style={{ "--logo-width": logoWidth }}
                width="64px"
                height="64px"
                alt="GoRiDev logo"
            />
            <h1 className="logo__heading"> GoRiDev </h1>
        </a>
        
    );

};