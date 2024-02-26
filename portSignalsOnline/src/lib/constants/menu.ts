interface MenuPath {
    name: string
    location: string
}

const menuPaths: Array<MenuPath> = [
    { name: "back", location: "/back" },
    { name: "front", location: "/front" },
    { name: "projects/stamp", location: "/projects/STAMP" },
    { name: "projects/viewport", location: "/projects/viewport" },
]

export {
    menuPaths
}

export type {
    MenuPath
}