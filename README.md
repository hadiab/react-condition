# React Condition

React conditional rendering more friendly way


## how it's works

```javascript
import { If } from 'react-condition'

<If condition={true}>
  <div>TRUE</div>
</If>
```

```javascript
import { If, Else } from 'react-condition'

<If condition={false}>
  <div>TRUE</div>
<Else />
  <div>FALSE</div>
</If>
```

```javascript
import { If, ElseIf, Else } from 'react-condition'

const fruit = 'Apple'

<If condition={fruit === 'Apple'}>
  <div>Apple</div>
<ElseIf condition={fruit === 'Orange'} />
  <div>Orange</div>
<Else />
  <div>Banana</div>
</If>
```

