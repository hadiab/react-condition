# React Condition

React conditional rendering more friendly way

## Install

```
npm install reactjs-condition
yarn add reactjs-condition
```

## How it works?

```javascript
import { If } from 'reactjs-condition'

<If condition={true}>
  <div>TRUE</div>
</If>
```

```javascript
import { If, Else } from 'reactjs-condition'

<If condition={false}>
  <div>TRUE</div>
<Else />
  <div>FALSE</div>
</If>
```

```javascript
import { If, ElseIf, Else } from 'reactjs-condition'

const fruit = 'Apple'

<If condition={fruit === 'Apple'}>
  <div>Apple</div>
<ElseIf condition={fruit === 'Orange'} />
  <div>Orange</div>
<Else />
  <div>Banana</div>
</If>
```

