import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { createEditCabin } from "../../services/apiCabins";


function CreateCabinForm({cabinToEdit = {}}) {

  //if the values was not available then make this values as empty by default.

  const {id: editId, ...editValues} = cabinToEdit;
  const isEditSession = Boolean(editId);


  const {register, handleSubmit, reset, getValues, formState} = useForm({
    defaultValues: isEditSession ? editValues: {},
  });
  const {errors} = formState;
  console.log(errors);




  function onSubmit(data) {
      mutate({...data, image: data.image[0]});
  }

  function onError(errors) {
    console.log(errors);
  }

 return (
    <Form onSubmit={() => {handleSubmit(onSubmit, onError)}}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" {...register("name", {
          required: "This field is required"

        })}/>
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="maxCapacity" {...register("maxCapacity",  {
          required: "This field is required",
          min: {
            value: 1,
            message: 'Capacity should be atleast 1'
          }
        })}/>
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice" {...register("regularPrice", {
          required: "This field is required",
           min: {
            value: 1,
            message: 'Capacity should be atleast 1'
          }
        })}/>
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" defaultValue={0} {...register("discount",  {
          required: "This field is required",
           validate: (value) => value <= getValues().regularPrice || 'Discount should be less than regular price',
        })}/>
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea type="number" id="description" defaultValue="" {...register("description",  {
          required: "This field is required"
        })}/>
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" type="file" {...register("image", {
          required: "This field is required",})}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add a Cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;

