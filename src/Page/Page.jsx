import Full_width_full_height_banner from "../Sections/Full_width_full_height_banner";
import Fifty_fifty from "../Sections/Fifty_fifty";
import Half_text_half_script from "../Sections/Half_text_half_script";
import Text_and_image from "../Sections/Text_and_image";

const Page = ({ pageData }) => {
  // Sections data (pass to component/sections as prop)
  const sections = pageData.acf.sections;

  // Get sections title
  const sectionsData = sections.map((section) => section.acf_fc_layout);

  // Mapping section names to components
  const sectionComponents = {
    // key:component
    // key must match to render component
    full_width_full_height_banner: Full_width_full_height_banner,
    fifty_fifty: Fifty_fifty,
    half_text_half_script: Half_text_half_script,
    text_and_image: Text_and_image,
  };

  return (
    <>
      {sectionsData.map((sectionName, index) => {
        const Component = sectionComponents[sectionName]; // Looks up sectionName in sectionComponents
        return Component ? <Component key={index} index={index} pageData={pageData} /> : null; // Render component if it exists in the map
      })}
    </>
  );
};

export default Page;
