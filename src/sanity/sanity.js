import sanityClient from "@sanity/client";

//todo to be updated to other sanity client

export default sanityClient({
  projectId: "", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2021-08-26",
  useCdn: true,
});
