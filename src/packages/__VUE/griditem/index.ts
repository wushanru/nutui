import GridItem from './grid-item.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(GridItem)

export type { GridItemProps } from './grid-item.vue'

export type GridItemInstance = ComponentPublicInstance & InstanceType<typeof GridItem>

export { GridItem, GridItem as default }
