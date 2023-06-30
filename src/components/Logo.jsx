export const Logo = ({ logoWidth }) => {

    return (

        <a className="logo">
            <img
                loading="lazy"
                className="logo__image"
                src="/assets/img/logo/logo-aside.png"
                style={{ "--logo-width": logoWidth }}
                alt="GoRiDev logo"
            />
            <h1 className="logo__heading"> GoRiDev </h1>
        </a>
        
    );

};