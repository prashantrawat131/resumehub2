function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top my-navbar">
                <div className="container-fluid">
                    <h1 className="text-center my-2 navbar-brand heading">Resume Hub</h1>
                    <div>
                        <div onClick={props.generatePDF} className="clickable-item">
                            <img
                                id="download-pdf-button-id"
                                className="generate-pdf-button"
                                src="download_button.svg"
                                alt="Download button"
                            />
                            <label className="clickable-text"><b>PDF</b></label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;