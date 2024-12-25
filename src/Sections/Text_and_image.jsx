const Text_and_image = ({index, pageData}) => {

    const sectionIndex = index

    const sectionData = pageData.acf.sections[sectionIndex]
    console.log(sectionData)

    const image = sectionData.image
    const title = sectionData.title
    const subtitle = sectionData.subtitle

    return (
        <>
        <p>{title}</p>
        <p>{subtitle}</p>
        <img src={image} alt="" />
        </>
    )
}

export default Text_and_image