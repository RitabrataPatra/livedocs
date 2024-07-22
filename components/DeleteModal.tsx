"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { deleteDocument } from "@/lib/actions/room.actions";
import { NextResponse } from "next/server";

const DeleteModal = ({ roomId }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteDocumentHandler = async () => {
    setLoading(true);
    try {
      await deleteDocument(roomId);
      setOpen(false);
    } catch (error) {
      console.log(`Error while deleting document(deletemodal) : ${error}`);
    }
    setLoading(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-slate-900 to-slate-700 flex h-10 gap-3 px-4">
          <Image
            src="/assets/icons/delete.svg"
            alt="delete"
            width={20}
            height={20}
            className="min-w-4 md:size-5"
            priority
          />
          <p className="mr-1 hidden sm:block">Delete</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog">
        <DialogHeader>
            <Image src="/assets/icons/delete-modal.svg" alt="delete" width={20} height={20} className="mb-3 md:size-9"/>
          <DialogTitle>Delete Document</DialogTitle>
          <DialogDescription>
            Are you sure that you want to   <span className="text-red-500">delete</span> this document?
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={deleteDocumentHandler}
          className="bg-gradient-to-r from-red-500 to-red-900 flex h-full gap-1 px-5"
        >
          {loading ? "Deleting" : "Delete"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
