describe('import vue components', () => {
    test('normal imports as expected', async () => {
        const cmp = await import('../pages/main-page')
        expect(cmp).toBeDefined()
    })

    test('template string imports as expected', async () => {
        // eslint-disable-next-line @typescript-eslint/quotes
        const cmp = await import(`../pages/main-page`)
        expect(cmp).toBeDefined()
    })

    test('dynamic imports as expected', async () => {
        const name = 'main-page'
        const cmp = await import(`../pages/${name}`)
        expect(cmp).toBeDefined()
    })
})
