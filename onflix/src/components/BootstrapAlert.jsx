function BootstrapAlert () {
    return (
        <>
        {/* Alert */}
        <div id="alert-fixed">
            <div className="alert alert-success alert-dismissible fade show alert-absolute" role="alert">
            <strong>Yeay!</strong> Cek film terbaru yang akan rilis di bioskop di halaman coming soon!
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        </div>
        </>
    )
}

export default BootstrapAlert;