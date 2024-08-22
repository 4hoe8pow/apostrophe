import { $, component$, useOnWindow } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import init from '../../atelier/out/tamahiroi'

// エラーハンドリングを関数に分離
const handleInitError = (error: unknown) => {
    if (
        error instanceof Error &&
        error.message.startsWith(
            "Using exceptions for control flow, don't mind me. This isn't actually an error!"
        )
    ) {
        // これは意図された例外なので無視
        return
    }
    // それ以外のエラーは再スロー
    throw error
}

// 初期化処理を関数に分離
const initializeApp = async () => {
    try {
        await init()
    } catch (error) {
        handleInitError(error)
    }
}

export default component$(() => {
    useOnWindow('load', $(initializeApp))

    return (
        <div style={{ margin: 0 }}>
            {/* Bevy Game will render inside this */}
        </div>
    )
})

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
}
