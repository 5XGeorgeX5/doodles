import { Body } from "@/components/body";
import { UploadForm } from "@/components/upload/upload-form";

export default function Upload() {
  return (
    <Body showUser={true}>
      <UploadForm></UploadForm>
    </Body>
  );
}
