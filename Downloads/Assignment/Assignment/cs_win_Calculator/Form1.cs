using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace cs_win_Calculator
{
    public partial class Form1 : Form
    {
        private int value = 0;
        private int lvalue = 0;
        private int rvalue = 0;
        private string methodName = "";
       
       
        public Form1()
        {
            InitializeComponent();
            this.label1.Text = "";
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Button b = (Button)sender;
                this.value = Convert.ToInt32(b.Text)
                              + this.value * 10;
                this.label1.Text = Convert.ToString(this.value);
            
        }

        private void button0_Click(object sender, EventArgs e)
        {
            this.value = Convert.ToInt32(button0.Text)
                          + this.value * 10;
            this.label1.Text = Convert.ToString(this.value);
        }

        private void buttonAdd_Click(object sender, EventArgs e)
        {
            this.lvalue = Convert.ToInt32(this.label1.Text);
            this.value = 0;
            this.methodName = "Add";

        }

        private void buttonSubtract_Click(object sender, EventArgs e)
        {
            this.lvalue = Convert.ToInt32(this.label1.Text);
            this.value = 0;
            this.methodName = "Subtract";
        }

        private void buttonDivide_Click(object sender, EventArgs e)
        {
            this.lvalue = Convert.ToInt32(this.label1.Text);
            this.value = 0;
            this.methodName = "Divide";
        }

        private void buttonMultiply_Click(object sender, EventArgs e)
        {
            this.lvalue = Convert.ToInt32(this.label1.Text);
            this.value = 0;
            this.methodName = "Multiply";
        }

        private void buttonEquals_Click(object sender, EventArgs e)
        {
            this.rvalue = Convert.ToInt32(this.label1.Text);
            switch(methodName)
            {
                case "Add":
                    this.label1.Text = Convert
                        .ToString(this.lvalue + this.rvalue);
                    break;
                case "Subtract":
                    this.label1.Text = Convert
                       .ToString(this.lvalue - this.rvalue);
                    break;
                case "Multiply":
                    this.label1.Text = Convert
                        .ToString(this.lvalue * this.rvalue);
                    break;
                case "Divide":
                    this.label1.Text = Convert
                        .ToString(Convert.ToDouble(this.lvalue)
                        / Convert.ToDouble(this.rvalue));
                    break;
            }
            this.value = 0;
            this.lvalue = 0;
            this.rvalue = 0;
        }

        private void buttonClear_Click(object sender, EventArgs e)
        {
            this.label1.Text = "";
            this.value = 0;
            this.lvalue = 0;
            this.rvalue = 0;
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}
