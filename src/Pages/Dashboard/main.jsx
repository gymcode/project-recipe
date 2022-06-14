import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import "./main.css";
import CuisineLogo from "../../Assets/Images/logo2.svg";
import { Routes, Route } from "react-router-dom";

//svgs
import {ReactComponent as Fish } from "../../Assets/Images/koi-fish.svg"
import {ReactComponent as Protein} from "../../Assets/Images/proteins.svg"
import {ReactComponent as Carrot} from "../../Assets/Images/carrot.svg"
import {ReactComponent as Fruit} from "../../Assets/Images/fruits.svg"
import {ReactComponent as Nut} from "../../Assets/Images/nuts.svg"
import {ReactComponent as Brocolli} from "../../Assets/Images/broccoli.svg"


// sub dashboards
import HomeCategory from "../Dashboard/HomeCategory/home";
import Pescaterian from "../Dashboard/Pescaterian/pescaterian";
import Fruitarian from "../Dashboard/Fruitarian/fruitarian";
import Vegan from "../Dashboard/Vegan/vegan";
import Vegetarian from "../Dashboard/Vegetarian/vegetarian";
import Paleo from "../Dashboard/Paleo/paleo";
import Omnivore from "../Dashboard/Omnivore/omnivore";

const navigation = [
  {
    name: "Pescaterian",
    href: "/dashboard/pescaterian",
    icon: Fish,
    current: true,
  },
  {
    name: "Omnivore",
    href: "/dashboard/omnivore",
    icon: Protein,
    current: false,
  },
  {
    name: "Vegetarian",
    href: "/dashboard/vegetarian",
    icon: Carrot,
    current: false,
  },
  {
    name: "Fruitarian",
    href: "/dashboard/fruitarian",
    icon: Fruit,
    current: false,
  },
  {
    name: "Paleo",
    href: "/dashboard/paleo",
    icon: ChartBarIcon,
    current: false,
  },
  {
    name: "Vegan",
    href: "/dashboard/vegan",
    icon: ChartBarIcon,
    current: false,
  },
];
const subNavigation = {
  name: "Home",
  href: "/dashboard",
  icon: HomeIcon,
  current: true,
};
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-800 text-white"
                          : "text-indigo-100 hover:bg-indigo-600",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden side-nav-container md:flex md:flex-shrink-0 shadow-xl ">
        <div className="flex flex-col w-68">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 pt-6">
              <img
                className="h-[3rem] px-10 w-auto"
                src={CuisineLogo}
                alt="Workflow"
              />
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-7 space-y-1">
                <div className="pt-10 border-b border-gray-300">
                  <h2 className="imprima-font capitalize text-sm text-gray-700 pb-2 px-3 font-sans border-b font-extralight">
                    Main Dash
                  </h2>
                  <a
                    href={subNavigation.href}
                    className="flex h-12 items-center my-1 px-3 text-gray-800 hover:rounded-lg hover:bg-[#FFE0D6] hover:text-[#F83F05] hover:shadow-sm hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out cursor-pointer"
                  >
                    <HomeIcon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-gray-600"
                      aria-hidden="true"
                    />
                    <div className="imprima-font font-medium">Home</div>
                  </a>
                </div>
                <div className="imprima-font">
                  <h2 className="imprima-font capitalize text-sm text-gray-700 pb-2 px-3 mt-4 font-sans border-b font-extralight">
                    Diet Categories
                  </h2>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " ring-0 bg-[#FFE0D6] text-black"
                          : "text-black hover:bg-[#FFE0D6]",
                        "group flex items-center px-4 py-2 h-12 mt-4 my-1 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className="mr-3 flex-shrink-0 h-6 w-6 text-gray-600"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search-field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className=" mx-auto sm:px-6 md:px-8"></div>
            <div className=" mx-auto sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}
                <Routes>
                  <Route path="/" element={<HomeCategory />} />
                  <Route path="/pescaterian" element={<Pescaterian />} />
                  <Route path="/omnivore" element={<Omnivore />} />
                  <Route path="/vegetarian" element={<Vegetarian />} />
                  <Route path="/Fruitarian" element={<Fruitarian />} />
                  <Route path="/Paleo" element={<Paleo />} />
                  <Route path="/vegan" element={<Vegan />} />
                </Routes>
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
