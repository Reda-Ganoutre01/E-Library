import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

export const SocialLinksFooter = () => {
    return (
        <>
            <nav>
                <h6 className="text-lg font-semibold text-white mb-4">Follow Us</h6>
                <ul className="flex space-x-6">
                    <li>
                        <a
                            className="text-gray-400 hover:text-white transition duration-200"
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-gray-400 hover:text-white transition duration-200"
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-gray-400 hover:text-white transition duration-200"
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size={24} />
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-gray-400 hover:text-white transition duration-200"
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
