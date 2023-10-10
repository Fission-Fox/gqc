import { Link } from "react-scroll";
type Prop = {
    text: string;
    to: string;
}
export default function CustomLink({ text, to }: Prop) {
    return (
        <Link
            className="nav-item"
            to={to}
            activeclassname="active"
            spy={true}
            smooth={true}
            duration={500}
        >
            <span className="nav-link">{text}</span>
        </Link>
    )
}
