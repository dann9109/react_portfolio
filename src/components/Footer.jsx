export default function Footer() {
    return (
        <footer className="footer fixed-bottom">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <img className="footer-img footer-icons" src="src/images/github-sign.png" alt="github" />
                    </div>
                    <div className="col-auto">
                        <img className="footer-img footer-icons" src="src/images/linkedin-logo.png" alt="linkedin" />
                    </div>
                </div>
            </div>
        </footer>
    );
}