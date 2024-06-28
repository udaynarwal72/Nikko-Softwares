import notificationicon from '../../assets/notification-icon.png';
import dropdown from '../../assets/dropdown.svg';

const Navbar = () => {
    return (
        <div className="bg-navbarcolor font-Port p-4 shadow-lg">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-black text-4xl font-navbarfont">NIKKO SOFTWARES</h1>
                <ul className="flex space-x-7">
                    <li className="flex items-center justify-center bg-navbarnotification rounded-full w-8 h-8">
                        <img src={notificationicon} alt="Notification" height="24" width="24" />
                    </li>
                    <li className='flex direction-row items-center justify-center '>
                        <img src="https://s3-alpha-sig.figma.com/img/e213/d957/a625a649615221b092d6c0c4344d5e6f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TfnyegWnVt4SxhX~-a7abi-8Hx3X0U0baTgo00jmS92TGGmwRyZmyOaQcg68e-nCwQ-NEUGLMgMDBenOLeYQwO5e9X-0kU1U2jhm5kbYsPrMcEL1EflnR~E31oqGO1R38Ob0icbzgnXURHhYt1WsiLB37QCrkVBToyc124qdmfRy~k~jB7dHgPLH7eJpvXj1gOFXi178cSEt0E1MxVx-fy4qcPnAJyDFFzPTYjrk4gzoCRbRXE0cQZQkJZsBpXABWjIT42jAsisZA-ZKbYZN1m1LTx~FiVZDo1z87KPQex2TkC7ru0BEt6x5GtLh4eeoqsPwrqw0bb1zeVW~m2RzFQ__" alt="Profile" height="32" width="32" className="rounded-full" />
                     <span className="text-color-profileusercolor ml-3 mr-1 font-nunitosans">Blossom Lead Executive</span>
                     <img src={dropdown} alt="Dropdown" height="8" width="12" />   
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
