import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      // S.documentTypeListItem('post').title('Posts'),
      // S.documentTypeListItem('category').title('Categories'),
      // S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('home').title('Home'),
      S.documentTypeListItem('contactus').title('Contact Us'),
      S.documentTypeListItem('services').title('Services'),
      S.documentTypeListItem('servicearea').title('Service Area'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && ![ 'home', 'contactus', 'services', 'servicearea'].includes(item.getId()!),
      ),
    ])