import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import ImageUploader from "react-images-upload";

import { makeStyles } from "@material-ui/core/styles";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import ProductApi from "../../services/ProductApi";
import ImageViewer from "../../components/common/ImageViewer";

import { fetchBrands } from "../../redux/brand/brand.actions";
import { setProduct } from "../../redux/product/product.actions";
import { fetchCategories } from "../../redux/category/category.actions";

const useStyles = makeStyles((theme) => ({
  formCtrl: {
    width: "100%",
  },
  uploadRow: {
    paddingBottom: "25px",
    paddingRight: "25px",
  },
  uploadCol: {
    width: "50%",
    float: "left",
  },
  imageCol: {
    width: "50%",
    float: "left",
  },
}));

function ProductDialog({
  brands,
  categories,
  setProduct,
  fetchBrands,
  fetchCategories,
  data,
  opened,
  onClose,
  onSubmit,
}) {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();
  const handleClose = () => {
    onClose(false);
  };

  const handleOk = (d) => {
    onSubmit(d, data._id);
    onClose(false);
  };
  const handleRemovePicture = () => {
    const confirm = window.confirm("Do you really want to remove this image?");
    if (confirm) {
      const newModel = { ...data };
      newModel.pictures.splice(0, 1);
      setProduct(newModel);
    }
  };

  const handleUpload = (picture) => {
    let file = picture;
    if (Array.isArray(file)) {
      file = file[0];
    }
    ProductApi.upload(file, data._id).then((data) => {
      if (data) {
        setProduct({ ...data });
      } else {
        // setAlert({
        //   message: t("Upload failed"),
        //   severity: "error"
        // });
      }
    });
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <Dialog
      open={opened}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add New Product</DialogTitle>
      {data && (
        <form onSubmit={handleSubmit(handleOk)}>
          <DialogContent>
            <DialogContentText>
              To add a product, please enter the name and description here.
            </DialogContentText>

            <Controller
              control={control}
              name="name"
              defaultValue={data.name}
              as={
                <TextField
                  autoFocus
                  margin="dense"
                  label="name"
                  type="text"
                  fullWidth
                />
              }
            />

            <Controller
              control={control}
              name="description"
              defaultValue={data.description}
              as={
                <TextField
                  autoFocus
                  margin="dense"
                  label="Description"
                  type="text"
                  fullWidth
                />
              }
            />

            <Controller
              control={control}
              name="price"
              defaultValue={data.price}
              type="number"
              as={
                <TextField
                  autoFocus
                  margin="dense"
                  label="Price"
                  type="text"
                  fullWidth
                />
              }
            />

            <Controller
              control={control}
              name="cost"
              defaultValue={data.cost}
              type="number"
              as={
                <TextField
                  autoFocus
                  margin="dense"
                  label="Cost"
                  type="text"
                  fullWidth
                />
              }
            />

            <Controller
              control={control}
              name="purchaseTaxRate"
              defaultValue={data.purchaseTaxRate}
              type="number"
              as={
                <TextField
                  autoFocus
                  margin="dense"
                  label="Purchase Tax Rate"
                  type="text"
                  fullWidth
                />
              }
            />

            <Controller
              control={control}
              name="saleTaxRate"
              defaultValue={data.saleTaxRate}
              type="number"
              as={
                <TextField
                  autoFocus
                  margin="dense"
                  label="Sale Tax Rate"
                  type="text"
                  fullWidth
                />
              }
            />

            <FormControl className={classes.formCtrl}>
              <InputLabel id="product-status-select-label">Status</InputLabel>
              <Controller
                control={control}
                name="status"
                defaultValue={data.status}
                rules={{ required: true }}
                as={
                  <Select id="product-status-select">
                    <MenuItem key={"A"} value={"A"}>
                      Active
                    </MenuItem>
                    <MenuItem key={"I"} value={"I"}>
                      Inactive
                    </MenuItem>
                  </Select>
                }
              />
            </FormControl>

            <FormControl className={classes.formCtrl}>
              <InputLabel id="product-category-select-label">
                Category
              </InputLabel>
              <Controller
                control={control}
                name="category"
                defaultValue={data.category && data.category._id}
                rules={{ required: true }}
                as={
                  <Select id="product-category-select">
                    {categories &&
                      categories.map((category) => (
                        <MenuItem key={category._id} value={category._id}>
                          {category.name}
                        </MenuItem>
                      ))}
                  </Select>
                }
              />
            </FormControl>

            <FormControl className={classes.formCtrl}>
              <InputLabel id="product-brand-select-label">Owner</InputLabel>
              <Controller
                control={control}
                name="brand"
                defaultValue={data.brand && data.brand._id}
                rules={{ required: true }}
                as={
                  <Select id="product-brand-select">
                    {brands &&
                      brands.map((brand) => (
                        <MenuItem key={brand._id} value={brand._id}>
                          {brand.name}
                        </MenuItem>
                      ))}
                  </Select>
                }
              />
            </FormControl>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      )}

      <div className={classes.uploadRow}>
        <div className={classes.uploadCol}>
          <ImageUploader
            withIcon={true}
            buttonText="Upload image"
            onChange={(picture) => handleUpload(picture)}
            imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
            maxFileSize={5242880}
          />
        </div>
        <div className={classes.imageCol}>
          <ImageViewer
            url={
              data && data.pictures && data.pictures.length > 0
                ? data.pictures[0].url
                : ""
            }
            onRemove={handleRemovePicture}
          />
        </div>
      </div>
    </Dialog>
  );
}

const mapStateToProps = (state) => ({
  brands: state.brands,
  categories: state.categories,
});

export default connect(mapStateToProps, {
  fetchBrands,
  fetchCategories,
  setProduct,
  // createBrand,
  // updateBrand
})(ProductDialog);
