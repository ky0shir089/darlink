"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { uploadSourceSchema, uploadSourceSchemaType } from "@/lib/formSchema";
import { useRef, useTransition } from "react";
import { uploadReport } from "../action";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const UploadSourceForm = () => {
  const [isPending, startTransition] = useTransition();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<uploadSourceSchemaType>({
    resolver: zodResolver(uploadSourceSchema),
    defaultValues: {
      file: null,
    },
  });

  function onSubmit(values: uploadSourceSchemaType) {
    startTransition(async () => {
      const result = await uploadReport(values);

      if (result.success) {
        form.reset({ file: null });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className={cn("text-2xl")}>Upload Report</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Browse File</FormLabel>
                  <FormControl>
                    <Input
                      ref={fileInputRef}
                      type="file"
                      placeholder="Browse File"
                      required
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? (
                <>
                  Uploading... <Loader2 className="animate-spin" />
                </>
              ) : (
                <>Upload</>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default UploadSourceForm;
