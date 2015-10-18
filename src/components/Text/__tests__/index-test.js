/* eslint-env mocha */

import { assertProps, renderToDOM, shallowRender } from '../../../modules/specHelpers'
import assert from 'assert'
import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import Text from '../'

suite('components/Text', () => {
  test('prop "accessibilityLabel"', () => {
    assertProps.accessibilityLabel(Text)
  })

  test('prop "accessible"', () => {
    assertProps.accessible(Text)
  })

  test('prop "children"', () => {
    const children = 'children'
    const result = shallowRender(<Text>{children}</Text>)
    assert.equal(result.props.children, children)
  })

  test('prop "component"', () => {
    assertProps.component(Text, 'span')
  })

  test('prop "numberOfLines"')

  test('prop "onPress"', (done) => {
    const dom = renderToDOM(<Text onPress={onPress} />)
    ReactTestUtils.Simulate.click(dom)
    function onPress(e) {
      assert.ok(e.nativeEvent)
      done()
    }
  })

  test('prop "style"', () => {
    assertProps.style(Text)
  })

  test('prop "testID"', () => {
    assertProps.testID(Text)
  })
})
