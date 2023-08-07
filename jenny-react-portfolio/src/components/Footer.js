import React from 'react';


export default function Footer() {
  return (
    <div>
        <footer className="bg-light py-5">
            <div className="container px-4 px-lg-5">
              <div className="small text-center text-muted mb-3">Copyright &copy; 2023 - Jenny Naoroji</div>
              <div className="d-flex justify-content-center align-items-center">
                <a href="https://github.com/jnaoroji" className="small text-center text-muted me-3"><i className="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/jenny-naoroji-158b29281/" className="small text-center text-muted me-3"><i className="bi bi-linkedin"></i></a>
                <a href="https://www.instagram.com/jnaoroji/" className="small text-center text-muted me-3"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
        </footer>
    </div>
  );
}
