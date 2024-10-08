import { component$ } from '@builder.io/qwik'
import { css } from '~/styled-system/css'

export default component$(() => {
    return (
        <div
            class={css({
                padding: 10,
                bg: 'red.400',
                height: 'dvh',
                margin: 100,
                fontSize: 30,
                fontFamily: 'harunoumi',
            })}
        >
            This box is styled with PandaCSS.
        </div>
    )
})
