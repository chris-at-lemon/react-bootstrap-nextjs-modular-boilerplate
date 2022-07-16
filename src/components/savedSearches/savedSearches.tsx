import { savedSearchesController } from "../savedSearches/savedSearchesController"

const SavedSearches = (savedSearches: any) => {
  const {} = savedSearchesController();

  return (
    <div>saved searches</div>
  )
}

export default SavedSearches;