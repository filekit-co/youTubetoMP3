import {getRuntimeFromLocals} from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({route, locals}) => {
    const {i} = getRuntimeFromLocals(locals);

    
})