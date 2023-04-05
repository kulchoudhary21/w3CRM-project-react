import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      {/* <!--**********************************
            Footer start
        ***********************************--> */}
      <div class="footer">
        <div class="copyright">
          <p>
            Copyright © Developed by{" "}
            <Link to="/" target="_blank">
              DexignZone
            </Link>{" "}
            2023
          </p>
        </div>
      </div>
      {/* <!--**********************************
            Footer end
        ***********************************-->
		 */}
    </div>
  );
}
export default Footer;
