export default (url) => () => import(/* webpackChunkName: "[request]" */`@/components/pages/${url}`)
