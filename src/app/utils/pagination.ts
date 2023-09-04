const isNumber = (value: string) => /^\d+$/.test(value)

export const getPagination = <T>(items: T[], postsPerPage = 2, currentPage = "1") => {

    if (!isNumber(currentPage)) {
        throw new Error("Not a Number")
    }

    const totalPosts = items.length
    const totalPages = Math.ceil(totalPosts/postsPerPage)
    const currentPageInt = parseInt(currentPage)
    
    if (currentPageInt > totalPages || currentPageInt < 1) {
        throw new Error("Out of bounds")
    }

    const offset = (currentPageInt - 1) * postsPerPage
    const currentPosts = items.slice(offset, offset + postsPerPage)

    return {
        totalPages,
        currentPosts,
    }
}