import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import { homeType } from './homeType'
import { contactUsType } from './contactUsType'
import { serviceAreaType } from './serviceAreaType'
import { servicesType } from './servicesType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, homeType, contactUsType, serviceAreaType, servicesType],
}
