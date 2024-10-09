import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function MagnifyingGlass () {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text bg-white">
            <HiOutlineMagnifyingGlass />
            </span>
            <input id="wd-search-assignment" className="text-start input-group-text bg-white" 
            placeholder="Search..." />
        </div>
    );
}