import logoImg from '../../assets/logo.svg';

export default function Logo(props) {
    const { className } = props;

    return (
        <img src={logoImg} alt="logo" className={className}></img>
    )
}