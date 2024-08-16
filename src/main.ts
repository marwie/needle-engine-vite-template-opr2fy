import {
  Behaviour,
  showBalloonMessage,
  DragControls,
  onStart,
  DragMode,
  PointerEventData,
  serializable,
  RemoteSkybox,
  WebXR,
  addComponent,
  ContactShadows,
  SceneSwitcher,
  findObjectOfType,
  OrbitControls,
  PostProcessingManager,
  ToneMappingEffect,
  BloomEffect,
  SharpeningEffect,
  ScreenSpaceAmbientOcclusionN8,
  ObjectUtils,
  Button,
  EventList,
} from '@needle-tools/engine';
import { Object3D } from 'three';

// onStart is one way to hook into the needle engine event loop (this is called once at the beginning of the update loop)
// you can also directly hook into update events using onUpdate
// or use NeedleEngine.addContextCreatedCallback
onStart((context) => {
  const scene = context.scene;

  const empty = new Object3D();
  scene.add(empty);
  empty.add(
    ObjectUtils.createPrimitive('Sphere', {
      position: [0, 1, 0],
    })
  );

  const buttonObject2 = ObjectUtils.createPrimitive('Cube', {
    parent: scene,
    position: [0, 0.5, 1],
  });
  buttonObject2
    .addComponent(Button, {
      onClick: EventList.from(() => {
        buttonObject2.add(empty);
      }),
    })
    .click();

  const buttonObject1 = ObjectUtils.createPrimitive('Cube', {
    parent: scene,
    position: [2, 0.5, 1],
    color: 'red',
  });
  buttonObject1.addComponent(Button, {
    onClick: EventList.from(() => {
      buttonObject1.add(empty);
    }),
  });
});
