import { Editor } from 'js/editor';
import { EditorInput } from 'js/editor/EditorInput';
import { createSignal, onMount } from 'solid-js';
import { focusCanvas } from 'js/gui/utils';

//Imports del segundo archivo
import { BPSubPanelParamType } from '../../editor.types';
import { BlueprintInput, InputType } from '../components/BlueprintInput';
import { BlueprintValue, Editor } from 'js/editor';
import { ECSEngine } from 'js/libs/tkecs';
import { SoundConstructor } from 'js/components/blueprint-stamps';

//Imports del tercer arcivo

import { BPSubPanelParamType } from '../../editor.types';
import { BlueprintInput, InputType } from '../components/BlueprintInput';
import { BlueprintValue, Editor } from 'js/editor';
import { ECSEngine } from 'js/libs/tkecs';
import { VideoConstructor } from 'js/components/blueprint-stamps';
import { VideoDetails } from 'js/components/blueprint-stamps/constructors/Video';





export enum InputType {
  Text = 'text',
  Number = 'number',
  Url = 'url',
}

interface InputProps {
  label: string;
  inputType: InputType;
  onSubmit: (value: any) => void;
  value?: string | number;
}

export const BlueprintInput = (props: InputProps) => {
  // eslint-disable-next-line prefer-const
  let inputRef: HTMLInputElement | undefined = undefined;
  const [inputActive, setInputActive] = createSignal(
    props.value ? true : false
  );
  const [placeholder, setPlaceholder] = createSignal(
    props.value ? `enter ${props.label}` : props.label
  );
  const [inputValue, setInputValue] = createSignal(
    props.value ? props.value.toString() : ''
  );

  const handleFocus = () => {
    // stop listening for delete bc backspace is needed
    EditorInput.resetDeleteCallback();
    setPlaceholder(`enter ${props.label}`);
    setInputActive(true);
  };

  const handleBlur = () => {
    // re-enable delete hotkey listener
    EditorInput.setDeleteCallback(Editor.removeModel);
    focusCanvas();
    if (inputValue().length > 0) {
      return;
    }
    setPlaceholder(props.label);
    setInputActive(false);
  };

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
      };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (!inputRef) {
      return;
    }
    inputRef.blur();
    props.onSubmit(
      props.inputType === InputType.Number ? Number(inputValue()) : inputValue()
    );
  };

  onMount(() => {
    
  })

  return (
    <form
      class="py-3 px-4 w-full flex items-center justify-center"
      onSubmit={(e: SubmitEvent) => handleSubmit(e)}
    >
      <div class="relative flex w-full">
        <input
          ref={inputRef}
          class="px-3 py-1.5 border border-black border-opacity-30 bg-transparent focus:border-[#0d9aff] focus:border-opacity-100 text-[15px] text-white font-interRegular input-component flex-grow rounded w-full"
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          onChange={(e) => handleChange(e)}
          value={inputValue()}
          type={props.inputType}
          step={'any'}
        />
        <span
          class={`pointer-events-none absolute z-0 w-full h-full flex text-white font-interRegular ${
            inputActive()
              ? '-top-3.5 left-0 text-xs leading-3 tracking-tight'
              : 'top-0 bottom-0 items-center left-3 text-sm leading-7 opacity-60'
          }`}
        >
          {placeholder()}
        </span>
      </div>
    </form>
  );
};


//!segundo archivo

interface SoundParamBoxProps {
  blueprintConfig: BPSubPanelParamType;
}

export const SoundParamBox = (props: SoundParamBoxProps) => {
  const ecsEngine = ECSEngine.getInstance();
  
  const handleSubmit = async (newUrl: string) => {
    const ent = ecsEngine.entityByKey(Editor.currentWorldEntityId);
    const soundConstructor = ent?.get(SoundConstructor);
    if (!soundConstructor) {
      return;
    }
    soundConstructor.syncBlueprintValue({ value: newUrl });
    const blueprintValue: BlueprintValue = {
      id: props.blueprintConfig.id,
      value: newUrl,
    };
    await Editor.updateBlueprintValue({ blueprintValue });
  };
  
  return (
    <div class="flex w-full">
      <BlueprintInput
        label={'Audio URL'}
        inputType={InputType.Url}
        value={props.blueprintConfig.value}
        onSubmit={async (value: string) => await handleSubmit(value)}
        ></BlueprintInput>
    </div>
  );
};

//!Tercer archivo

interface VideoParamBoxProps {
  blueprintConfig: BPSubPanelParamType;
}

export const VideoParamBox = (props: VideoParamBoxProps) => {
  const ecsEngine = ECSEngine.getInstance();
  
  const handleThumbnailUpdate = async ({
    label,
    value,
  }: {
    label: 'thumbnail' | 'video_url';
    value: string;
  }) => {
    const ent = ecsEngine.entityByKey(Editor.currentWorldEntityId);
    const videoConstructor = ent?.get(VideoConstructor);
    if (!videoConstructor) {
      return;
    }

    const updatedBlueprintValue: VideoDetails = {
      ...videoConstructor.videoDetails,
      [label]: value,
    };

    const updatedValue: BlueprintValue = {
      id: props.blueprintConfig.id,
      value: updatedBlueprintValue,
    };
    videoConstructor.syncBlueprintValue({ value: updatedValue });
    await Editor.updateBlueprintValue({ blueprintValue: updatedValue });
  };

  return (
    <div class="flex w-full flex-col mt-5">
      <BlueprintInput
        label={'Thumbnail URL'}
        inputType={InputType.Url}
        value={props.blueprintConfig.value.thumbnail}
        onSubmit={async (value: string) =>
          await handleThumbnailUpdate({ label: 'thumbnail', value: value })
        }
      ></BlueprintInput>

      <BlueprintInput
        label={'Video URL'}
        inputType={InputType.Url}
        value={props.blueprintConfig.value.video_url}
        onSubmit={(value: string) =>
          handleThumbnailUpdate({ label: 'video_url', value: value })
        }
      ></BlueprintInput>
    </div>
  );
};
